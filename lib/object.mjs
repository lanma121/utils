

export const update = (oldVal, newVal, isNew = false) => {
    Object.keys(oldVal).m;
    console.log(this, newVal);
}

((object) => {
    object.prototype.update = object.update || function(newVal, isNew) {
        return update(this, newVal, isNew);
    };

})(Object)