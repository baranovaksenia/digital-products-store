export const PRODUCT_CATEGORIES = [
	{
		label: 'Ebooks',
		value: 'ebooks' as const,
		featured: [
			{
				name: 'Editors Picks',
				href: `/products?category=ebooks`,
				imageSrc: '/ebooks/picks.jpg',
			},
			{
				name: 'New Releases',
				href: '/products?category=ebooks&sort=desc',
				imageSrc: '/ebooks/new.jpg',
			},
			{
				name: 'Bestsellers',
				href: '/products?category=ebooks',
				imageSrc: '/ebooks/bestsellers.jpg',
			},
		],
	},
	{
		label: 'Templates',
		value: 'templates' as const,
		featured: [
			{
				name: 'Popular Templates',
				href: `/products?category=templates`,
				imageSrc: '/templates/blue.jpg',
			},
			{
				name: 'Featured Templates',
				href: '/products?category=templates&sort=desc',
				imageSrc: '/templates/mixed.jpg',
			},
			{
				name: 'Top Rated Templates',
				href: '/products?category=templates',
				imageSrc: '/templates/purple.jpg',
			},
		],
	},
];
