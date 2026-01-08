const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;
const ADMIN_SECRET = "admin123"; // Simple protection for demo purposes

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Database Setup
const dbPath = path.resolve(__dirname, 'codes.db');
const db = new sqlite3.Database(dbPath, (err) => {
    if (err) {
        console.error('Error opening database', err.message);
    } else {
        console.log('Connected to the SQLite database.');
        db.run(`CREATE TABLE IF NOT EXISTS codes (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            code TEXT UNIQUE NOT NULL,
            is_used INTEGER DEFAULT 0,
            generated_at DATETIME DEFAULT CURRENT_TIMESTAMP,
            used_at DATETIME
        )`);
    }
});

// Helper: Generate random code
function generateCode(length = 8) {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
        result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
}

// API: Generate a new code (Protected)
app.post('/api/generate', (req, res) => {
    const { secret } = req.body;
    if (secret !== ADMIN_SECRET) {
        return res.status(403).json({ error: 'Unauthorized' });
    }

    const newCode = generateCode();
    const sql = `INSERT INTO codes (code) VALUES (?)`;

    db.run(sql, [newCode], function (err) {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json({
            success: true,
            code: newCode,
            id: this.lastID
        });
    });
});

// API: Validate and consume a code
app.post('/api/validate', (req, res) => {
    const { code } = req.body;
    if (!code) {
        return res.status(400).json({ error: 'Code is required' });
    }

    const sql = `SELECT * FROM codes WHERE code = ?`;
    db.get(sql, [code.toUpperCase()], (err, row) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        if (!row) {
            return res.status(404).json({ error: 'Code not found' });
        }
        if (row.is_used === 1) {
            return res.status(400).json({ error: 'Code already used' });
        }

        // Mark as used
        const updateSql = `UPDATE codes SET is_used = 1, used_at = CURRENT_TIMESTAMP WHERE id = ?`;
        db.run(updateSql, [row.id], function (err) {
            if (err) {
                return res.status(500).json({ error: err.message });
            }
            res.json({ success: true, message: 'Code valid and activated' });
        });
    });
});

// API: List all codes (Protected - for Admin)
app.get('/api/codes', (req, res) => {
    const secret = req.headers['x-admin-secret'];
    if (secret !== ADMIN_SECRET) {
        return res.status(403).json({ error: 'Unauthorized' });
    }

    const sql = `SELECT * FROM codes ORDER BY generated_at DESC`;
    db.all(sql, [], (err, rows) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json(rows);
    });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
