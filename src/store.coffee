
export class LoveStore
  constructor: (@conn, @name='') ->
    return
  save: ->
    console.warn "lovefield save NOT IMPLEMENTED"
  create: (model) ->
    console.log "lovefield create"
    table = @conn.getSchema().table(@name)
    row = table.createRow model.toJSON()
    return @conn.insert().into(table).values([row])
  update: (model) ->
    console.warn "lovefield update NOT IMPLEMENTED"
    table = @conn.getSchema().table(@name)
  find: (model) ->
    console.log "lovefield find"
    table = @conn.getSchema().table(@name)
    q = @conn.select().from(table).where(table.id.eq(model.id))
    .exec()
    return q
  findAll: ->
    console.log "lovefield findAll"
    table = @conn.getSchema().table(@name)
    return @conn.select().from(table).exec()
  destroy: (model) ->
    console.warn "lovefield destroy NOT IMPLEMENTED"
    table = @conn.getSchema().table(@name)
    
