const { ForbiddenError } = require('@strapi/utils/lib/errors');

const hasRequiredModelScopes = async (strapi, uid, auth) => {
	try {
		await strapi.auth.verify(auth, { scope: `${uid}.find` });
	} catch (e) {
		throw new ForbiddenError();
	}
};

module.exports = {
	hasRequiredModelScopes,
};
