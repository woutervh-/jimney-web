import { Entry, convertDocument } from './blog-convert-document';

class BlogApi {
    private referenceCounter: number = 0;

    private postsDocumentCache: Promise<Entry[]> | undefined = undefined;

    getPosts() {
        this.referenceCounter += 1;
        if (this.postsDocumentCache === undefined) {
            this.postsDocumentCache = fetch('/feeds/posts/default?max-results=10')
                .then((response) => {
                    if (response.status < 200 || 300 <= response.status) {
                        throw new Error('Status was not OK.');
                    }
                    return response.text();
                })
                .then((xml) => {
                    const parser = new DOMParser();
                    const document = parser.parseFromString(xml, 'application/xml');
                    return convertDocument(document);
                });
        }
        return this.postsDocumentCache.then((entries) => {
            return {
                dereference: () => {
                    this.referenceCounter -= 1;
                    if (this.referenceCounter === 0) {
                        this.postsDocumentCache = undefined;
                    }
                },
                entries
            };
        });
    }
}

export const blogApi = new BlogApi();
