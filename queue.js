function createQueue() {
    return {
        elements: [],
        size () {
            return this.elements.length
        },
        add (element) {
            this.elements.push(element)
            return this.elements.length
        },
        peek () {
            return this.elements[0]
        },
        dequeue () {
            if(!this.size()) throw new Error
            return this.elements.shift()
        }
    }
}

module.exports = { createQueue }
