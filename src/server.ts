import Fastify from 'fastify'

const app = Fastify({
	logger: {
		transport:
			process.env.NODE_ENV === 'development'
				? {
						target: 'pino-pretty',
						options: {
							translateTime: 'SYS:HH:MM:ss',
							ignore: 'pid,hostname',
						},
					}
				: undefined,
	},
})

export const log = app.log

export default app
