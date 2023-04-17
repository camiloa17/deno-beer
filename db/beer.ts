import { DataTypes, Model } from 'https://deno.land/x/denodb@v1.2.0/mod.ts'

export class Beer extends Model {
	static table = 'beers'
	static timestamps = false

	static fields = {
		id: { primary: true, autoIncrement: true },
		name: DataTypes.STRING,
		brand: DataTypes.STRING,
		is_premium: DataTypes.BOOLEAN,
		registration_date: DataTypes.TIMESTAMP,
	}
}
