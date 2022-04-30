export function changeClassList (element, classe) {
    element.classList.toggle(classe);    
}

export function addClassList (element, classe) {
    element.classList.add(classe);    
}

export function removeClassList (element, classe) {
    element.classList.remove(classe);    
}

export function changeClassListNode (element, classe) {
    element.forEach((item) => {
        item.classList.toggle(classe);    
    })
}