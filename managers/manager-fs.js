import fs from 'fs';

// afegiu codi ... (2pto)
export class ManagerFs {
    constructor(_file) {
        // this.mgfl = new ManagerFs('./data/movies.json');
        // this.mgfl2 = new ManagerFs('./data/actors.json');
        // this.actors = this.mgfl.getData();
        // this.movies = this.mgfl2.getData();
        this.file = _file('./data/movies.json');
        this.movies = this.file.getData();

        return this.movies;
        
    }
    getData() {

        try {
            const data = fs.readFileSync(this.file, "utf8");
            console.log("File content:", data);
        } catch (err) {
            console.error(err);
        }

    }
}



