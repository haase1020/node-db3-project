const db = require('../data/db-config.js');

module.exports = {
    find,
    findById,
    findSteps,
    add,
    update,
    remove,
    addStep
};

function find() {
    return db('schemes');
};

function findById(id) {
    return db ('schemes')
    .where({ id })
    .first()
    // .then(scheme => { scheme ? scheme : null })
};

function findSteps(id) {
    return db('schemes as s')
        .join('steps as st', 's.id', 'st.scheme_id')
        .select('s.scheme_name as Scheme', 'st.step_number as Step', 'st.instructions as Instructions')
        .where('s.id', id)
        .orderBy('st.step_number');
};

function add(scheme) {
    return db('schemes')
        .insert(scheme, 'id');
};

function update(changes, id) {
    return db('schemes')
        .where({ id })
        .update(changes);
};

function remove(id) {
    return db('schemes')
        .where({ id })
        .del();
};

function addStep(step, scheme_id) {
    return db('steps')
        .where('scheme_id', scheme_id)
        .insert(step, 'id');
};