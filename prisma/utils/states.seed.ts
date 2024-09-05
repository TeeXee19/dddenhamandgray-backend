import { PrismaClient } from '@prisma/client';
import * as fs from 'fs';
const csv = require('csv-parser')

const prisma = new PrismaClient();

async function seedStates() {
    fs.createReadStream('prisma/utils/data/states.csv')
        .pipe(csv())
        .on('data', async (row) => {
            // Process each row
            const { id, name, code, institutions, beneficiaries } = row;

            try {
                // Create record in State table
                await prisma.state.create({
                    data: {
                        id: parseInt(id),
                        name,
                        code,
                        financialInstitutions: +institutions,
                        beneficiaries: +beneficiaries
                    }
                });
            } catch (error) {
                console.error(error);
            }
        })
        .on('end', async () => {
            console.log('States CSV file successfully processed');
        });

}


seedStates()
    .catch(e => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });

