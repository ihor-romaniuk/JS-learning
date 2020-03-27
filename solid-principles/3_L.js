// Liskov substitution principle

class Person {}

class Member extends Person {
    access() {
        console.log('You have an access');
    }
}

class Guest extends Person {}

class Frontend extends Member {
    constructor() {
        super();
    }
    
    canCreateFrontend() {}
}

class Backend extends Member {
    constructor() {
        super();
    }

    canCreateBackend() {}
}

class PersonFromDifferentCompany extends Guest {
    constructor() {
        super();
    }

    access() {
        throw new Error('You do not have an access');
    }
}

function openSecretDoor(member) {
    member.access();
}

openSecretDoor(new Frontend());
openSecretDoor(new Backend());
// openSecretDoor(new PersonFromDifferentCompany()); // There should be member

// === Example #2 ======================================================================================================

class Component {}

class ComponentWithTemplate {
    render() {
        return `<div>Component</div>`;
    }
}

class HigherOrderComponent {}

class HeaderComponent extends ComponentWithTemplate {
    onInit() {}
}

class Footercomponent extends ComponentWithTemplate {
    afterInit() {}
}

class HOC extends HigherOrderComponent {
    render() {
        throw new Error('Render is imposible here');
    }

    wrapComponent(component) {
        component.wrapped = true;
        return component;
    }
}

function renderComponent(component) {
    return component.render();
}

renderComponent(new HeaderComponent());
renderComponent(new Footercomponent());
