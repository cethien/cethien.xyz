type Meta = {
	title: string
	description: string
	author: string
	copyright: Copyright
}

type Copyright = {
	years: number[]
	name: string
	ref: string
}

export const meta: Meta = {
	title: 'cethien.xyz',
	description: `ongoing developer`,
	author: 'cethien',
	copyright: {
		years: [2024, new Date().getFullYear()],
		name: 'cethien',
		ref: 'https://github.com/cethien'
	}
}
