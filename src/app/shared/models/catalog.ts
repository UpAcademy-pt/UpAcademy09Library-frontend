export class Catalog {
    'title': string;
    'description': string;
    'author': string;
    'isbn': string;
    constructor(catalog?: any) {
        Object.assign(this, catalog);
    }
}
//db java
// private String title;
// private String description;
// private String author;
// private String photoLink;
// private String topic;
// private String location;
// private String criationDate;
// private String lastChangeDate;
// private String isbn;
// private String state;