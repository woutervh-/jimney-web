export interface TextConstruct {
    type: 'text' | 'html' | 'xhtml';
    content: string;
}

export interface Content extends TextConstruct { }

export interface Link {
    rel?: string;
    type?: string;
    href: string;
    title?: string;
}

export interface Entry {
    id: string;
    published: Date | undefined;
    updated: Date;
    title: TextConstruct;
    content: Content | undefined;
    links: Link[];
}

function convertLink(element: Element): Link {
    const relAttribute = element.getAttribute('rel');
    let rel: string | undefined;
    if (relAttribute !== null) {
        rel = relAttribute;
    }
    const typeAttribute = element.getAttribute('type');
    let type: string | undefined;
    if (typeAttribute !== null) {
        type = typeAttribute;
    }
    const hrefAttribute = element.getAttribute('href');
    if (hrefAttribute === null) {
        throw new Error('Href attribute is missing.');
    }
    const href = hrefAttribute;
    const titleAttribute = element.getAttribute('title');
    let title: string | undefined;
    if (titleAttribute !== null) {
        title = titleAttribute;
    }
    return { rel, type, href, title };
}

function convertText(element: Element): TextConstruct {
    const typeAttribute = element.getAttribute('type');
    let type: TextConstruct['type'];
    if (typeAttribute === null || typeAttribute === 'text') {
        type = 'text';
    } else if (typeAttribute === 'html' || typeAttribute === 'xhtml') {
        type = typeAttribute;
    } else {
        throw new Error('Unsupported text type: ' + typeAttribute);
    }
    let content: string;
    if (element.textContent === null) {
        content = '';
    } else {
        content = element.textContent;
    }
    return { type, content };
}

function convertContent(element: Element): Content {
    return convertText(element);
}

function convertEntry(element: Element): Entry {
    const idElement = element.querySelector('id');
    if (!idElement) {
        throw new Error('ID element is missing.');
    }
    if (idElement.textContent === null) {
        throw new Error('ID text content is missing.');
    }
    const id = idElement.textContent;
    const publishedElement = element.querySelector('published');
    let published: Date | undefined = undefined;
    if (publishedElement && publishedElement.textContent !== null) {
        published = new Date(publishedElement.textContent);
    }
    const updatedElement = element.querySelector('updated');
    if (!updatedElement) {
        throw new Error('Updated element is missing.');
    }
    if (updatedElement.textContent === null) {
        throw new Error('Updated text content is missing.');
    }
    const updated = new Date(updatedElement.textContent);
    const titleElement = element.querySelector('title');
    if (!titleElement) {
        throw new Error('Title element is missing.');
    }
    const title = convertText(titleElement);
    const contentElement = element.querySelector('content');
    let content: Content | undefined = undefined;
    if (contentElement) {
        content = convertContent(contentElement);
    }
    const linkElements = element.querySelectorAll('link');
    const links: Link[] = [];
    for (let i = 0; i < linkElements.length; i++) {
        const linkElement = linkElements.item(i);
        links.push(convertLink(linkElement));
    }
    return { id, published, updated, title, content, links };
}

export function convertDocument(document: Document): Entry[] {
    const entriesElements = document.querySelectorAll('feed > entry');
    const entries: Entry[] = [];
    for (let i = 0; i < entriesElements.length; i++) {
        const entryElement = entriesElements.item(i);
        entries.push(convertEntry(entryElement));
    }
    return entries;
}
