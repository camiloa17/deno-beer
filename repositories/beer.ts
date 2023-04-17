import { Beer } from '../db/beer.ts'

export interface BeerData {
	name: string
	brand: string
	is_premium: boolean
}

class BeerRepo {
	create(beer: BeerData) {
		return Beer.create({ ...beer, registration_date: new Date() })
	}

	selectAll() {
		return Beer.all()
	}

	selectById(id: number) {
		return Beer.where({ id }).first()
	}

	update(id: number, beerData: BeerData) {
		return Beer.where({ id }).update({
			...beerData,
			registration_date: new Date(),
		})
	}

	delete(id: number) {
		return Beer.where({id}).delete()
	}
}

export default new BeerRepo()
