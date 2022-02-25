const single = (resource, authUser ) => ({
    id : resource.id,
    fecha : new Date(resource.fecha).toLocaleString(),
    tiempo : resource.tiempo,
    accion : resource.accion
})

const multiple = (resources, authUser) => resources.map((resource) => single(resource, authUser));

module.exports = {
    single,
    multiple
}