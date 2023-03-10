"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CrudUseCases = void 0;
class CrudUseCases {
    constructor(Repo) {
        this.Repo = Repo;
    }
    async add(data) {
        return await this.Repo.addOne(data);
    }
    async getOne(props) {
        return await this.Repo.getOne(props);
    }
    async getMany(data, fields) {
        return await this.Repo.getMany(data, fields);
    }
    async getAll(props) {
        return await this.Repo.getAll(props);
    }
    async update(id, data) {
        return await this.Repo.update(id, data);
    }
    async delete(id) {
        return await this.Repo.delete(id);
    }
}
exports.CrudUseCases = CrudUseCases;
