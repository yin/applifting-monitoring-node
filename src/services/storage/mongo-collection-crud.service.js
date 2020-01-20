function createCrudForMongoModel(model) {
    return {
        list: () =>
            model.find(),
        create: (payload) =>
            new model(t).save(),
        read: (id) =>
            model.findById(id),
        update: (id, payload) =>
            model.findByIdAndUpdate({_id: id}, payload, {new: true}),
        remove: (id) =>
            model.findByIdAndDelete({_id: id})
    };
}

module.exports = createCrudForMongoModel;
