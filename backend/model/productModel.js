const pool = require("../database/db");

class ProductModel {
    static async addProduct(data) {
        const {
            name, modelseries, description, category, price, stock, 
            processor, ram, storage, screenSize, os, images
        } = data;

        const query = `
            INSERT INTO products 
            (name, modelseries, description, category, price, stock, processor, ram, storage, screenSize, os, images) 
            VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12) 
            RETURNING *`;
        
        const values = [
            name, modelseries, description, category, price, stock,
            processor, ram, storage, screenSize, os, images
        ];

        const result = await pool.query(query, values);
        return result.rows[0];
    }

    static async getAllProducts() {
        const query = `
            SELECT *
            FROM products ORDER BY created_at DESC LIMIT 20`
        ;
        const result = await pool.query(query);
        return result.rows;
    }

    static async deleteProduct(id) {
        const query = `DELETE FROM products WHERE id = $1 RETURNING *`;
        const values = [id];
        const result = await pool.query(query, values);
        return result.rows[0];
    }

    static async getProductById(id) {
        const query = `SELECT * FROM products WHERE id = $1`;
        const values = [id];
        const result = await pool.query(query, values);
        return result.rows[0];
    }

    static async updateProduct(id, data) {
        const {
            name, modelseries, description, category, price, stock, 
            processor, ram, storage, screenSize, os, images
        } = data;

        const query = `
            UPDATE products SET 
                name = $1, modelseries = $2, description = $3, category = $4,
                price = $5, stock = $6, processor = $7, ram = $8, storage = $9, 
                screenSize = $10, os = $11, images = $12
            WHERE id = $13 RETURNING *`;
        
        const values = [
            name, modelseries, description, category, price, stock,
            processor, ram, storage, screenSize, os, images, id
        ];

        const result = await pool.query(query, values);
        return result.rows[0];
    }
  

    static async getProductsByCategory(category) {
        const query = `SELECT * FROM products WHERE category = $1 ORDER BY created_at DESC LIMIT 4`;
        const values = [category];
        const result = await pool.query(query, values);
        return result.rows;
    }

    static async getLaptopsList(category) {
        const query = `SELECT * FROM products WHERE category = $1 ORDER BY created_at DESC`;
        const values = [category];
        const result = await pool.query(query, values);
        return result.rows;
    }

    static async getLaptopDetails  (id){
        try {
            const result = await pool.query(
                "SELECT * FROM products WHERE id = $1",
                [id]
            );
            return result.rows[0];
        } catch (error) {
            console.error("Error fetching product:", error);
            throw error;
        }
    };

    

}

module.exports = ProductModel;
