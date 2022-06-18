
const swaggerConfig = {
    "openapi": "3.0.2",
    "info": {
        "title": "Swagger API learning",
        "description": "This is a sample example of a swagger API for learning purpose",

        "version": "1.0.0"
    },

    "servers": [
        {
            "url": "http://localhost:3000",
        }
    ],
    "tags": [
        {
            "name": "Books",
            "description": "Everything about Books and their related operations",
        },
    ],
    "paths": {
        "/books/{id}": {
            "get": {
                "tags": ["Books"],
                "summary": "Get a book by its id",
                "description": "Return a single book by its id",
                parameters: [
                    {
                        "name": "id",
                        "in": "path",
                        "description": "The id of the book to retrieve",
                        "operationId": "getBookById",
                        "required": true,
                        "schema": {
                            "type": "integer",
                            "format": "int64"
                        },
                    }
                ],
                "responses": {
                    "200": {
                        "description": "A single book",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/Book"
                                }
                            }
                        }
                    },
                    "404": {
                        "description": "No book found",
                    }
                }
            },
            "put": {
                "tags": ["Books"],
                "summary": "Update a book by its id",
                "description": "Update a single book by its id",
                parameters: [
                    {
                        "name": "id",
                        "in": "path",
                        "description": "The id of the book to update",
                        "operationId": "updateBookById",
                        "required": true,
                        "schema": {
                            "type": "integer",
                            "format": "int64"
                        }
                    }
                ],
                requestBody: {
                    "content": {
                        "application/json": {
                            "schema": {
                                "$ref": "#/components/schemas/Book"
                            }
                        }
                    }
                },
                "responses": {
                    "200": {
                        "description": "A single book",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/Book"
                                }
                            }
                        }
                    },
                    "404": {
                        "description": "No book found",
                    }
                }
            },
            "delete": {
                "tags": ["Books"],
                "summary": "Delete a book by its id",
                "description": "Delete a single book by its id",
                parameters: [
                    {
                        "name": "id",
                        "in": "path",
                        "description": "The id of the book to delete",
                        "operationId": "deleteBookById",
                        "required": true,
                        "schema": {
                            "type": "integer",
                            "format": "int64"
                        }
                    }
                ],
                "responses": {
                    "200": {
                        "description": "A single book",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/Book"
                                }
                            }
                        }
                    },
                    "404": {
                        "description": "No book found",
                    }
                }
            }
        },
        "/books/add": {
            "post": {
                "tags": ["Books"],
                "summary": "Add a new book",
                "description": "Add a new book",
                "requestBody": {
                    "content": {
                        "application/json": {
                            "schema": {
                                "$ref": "#/components/schemas/Book",
                                // exclude id from the schema
                                "x-exclude": ["id"]
                            }
                        }
                    },
                    "required": true
                },
                "responses": {
                    "200": {
                        "description": "A single book",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/Book"
                                }
                            }
                        }
                    }
                }
            }
        },
        "/books": {
            "get": {
                "tags": [
                    "Books"
                ],
                "summary": "Get all books",
                "description": "Get all books",
                "operationId": "getBooks",
                responses: {
                    "200": {
                        "description": "An array of books",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "type": "array",
                                    "items": {
                                        "$ref": "#/components/schemas/Book"
                                    }
                                }
                            }
                        }
                    },
                    "500": {
                        "description": "Internal server Error"
                    }
                },

            },
        },
    },
    "components": {
        "schemas": {
            "Book": {
                "type": "object",
                "properties": {
                    "id": {
                        "type": "integer",
                        "format": "int64",
                        "example": 1
                    },
                    title: {
                        "type": "string",
                        "example": "Book 1",
                    },
                    author: {
                        "type": "string",
                        "example": "Author 1",
                    },
                    year: {
                        "type": "string",
                        example: "2018",
                    }
                }
            },
        },
    }
}

module.exports = swaggerConfig