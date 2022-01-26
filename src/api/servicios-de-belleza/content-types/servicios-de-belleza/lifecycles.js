const slugify = require("slugify");

module.exports = {
  beforeCreate(event) {
    const { data } = event.params;
    if (data.Titulo) {
      data.Slug = slugify(data.Titulo, { lower: true, strict: true });
    }
  },
  beforeUpdate(event) {
    const { data } = event.params;
    if (data.Titulo) {
      data.Slug = slugify(data.Titulo, { lower: true, strict: true });
    }
  },
};
