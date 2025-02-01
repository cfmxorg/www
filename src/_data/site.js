export default function () {
	return {
		environment: process.env.ENVIRONMENT || "production",
		domain: process.env.DOMAIN || "api.cfmx.org",
	};
}
