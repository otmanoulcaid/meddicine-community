export class UserRepository
{
    constructor(db)
    {
        this.db = db;
    }

    async findAll()
    {
        const [rows] = await this.db.query(`SELECT * FROM users`);
        return rows.map(this.mapToJavaScript);
    }

    async findOne(field)
    {
        const keys = Object.keys(field);
        const values = Object.values(field);

        const [rows] = await this.db.query(
            `SELECT * FROM users WHERE ${keys} = ? LIMIT 1`,
            values
        );

        return rows[0];
    }

    async insert(data)
    {
        const keys = Object.keys(data);
        const values = Object.values(data);
        const placeholders = keys.map( e => '?').join(', ');

        const [result] = await this.db.query(
            `INSERT INTO users (${keys.join(', ')}) VALUES (${placeholders})`,
            values
        );
        return { id: result.insertId, ...data };
    }

    async update(field, data)
    {
        const fieldKey = Object.keys(field)[0];
        const fieldValue = field[fieldKey];

        const set = Object.keys(data).map(k => `${k} = ?`).join(', ');
        const values = [...Object.values(data), fieldValue];

        await this.db.query(
            `UPDATE users SET ${set} WHERE ${fieldKey} = ?`,
            values
        );
    }

    async delete(field)
    {
        const fieldKey = Object.keys(field)[0];
        const fieldValue = field[fieldKey];

        await this.db.query(
            `DELETE FROM users WHERE ${fieldKey} = ?`,
            [fieldValue]
        );
    }
}
