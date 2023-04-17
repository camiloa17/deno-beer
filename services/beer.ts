import { Beer } from '../db/beer.ts'
import BeerRepo, { BeerData } from '../repositories/beer.ts'

export const getBeers = async (): Promise<Beer[]> => {
	return await BeerRepo.selectAll()
}

export const getBeer = async (beerId: number): Promise<Beer> => {
	return await BeerRepo.selectById(beerId)
}

export const createBeer = async (newBeer: BeerData): Promise<Beer> => {
	return await BeerRepo.create(newBeer)
}

export const updateBeer = async (
	id: number,
	newData: BeerData,
): Promise<Beer | Beer[]> => {
	const foundBeer = await BeerRepo.selectById(id)

	if (!foundBeer?.id) {
		throw new Error('No beer found with that id')
	}

	return await BeerRepo.update(id, newData)
}

export const deleteBeer = async (id: number): Promise<Beer | Beer[]> => {
	return await BeerRepo.delete(id)
}
