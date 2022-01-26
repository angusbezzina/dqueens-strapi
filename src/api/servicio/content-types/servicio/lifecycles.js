const slugify = require("slugify");

module.exports = {
  beforeCreate(event) {
    const { data } = event.params;
    if (data.titulo) {
      data.Slug = slugify(data.titulo, { lower: true, strict: true });
    }
  },
  beforeUpdate(event) {
    const { data } = event.params;
    if (data.titulo) {
      data.Slug = slugify(data.titulo, { lower: true, strict: true });
    }
  },
};
