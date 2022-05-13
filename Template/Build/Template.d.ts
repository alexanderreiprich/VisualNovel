declare namespace Template {
    function BeachScene(): ƒS.SceneReturn;
}
declare namespace Template {
    function ExampleScene(): ƒS.SceneReturn;
}
declare namespace Template {
    export import ƒ = FudgeCore;
    export import ƒS = FudgeStory;
    let transitions: {
        puzzle: {
            duration: number;
            alpha: string;
            edge: number;
        };
    };
    let sound: {
        nightclub: string;
        beach: string;
        click: string;
        seagull: string;
        swimming: string;
        music: string;
        people: string;
    };
    let locations: {
        nightcity: {
            name: string;
            background: string;
        };
        beach: {
            name: string;
            background: string;
        };
    };
    let characters: {
        narrator: {
            name: string;
        };
        aisaka: {
            name: string;
            origin: ƒ.ORIGIN2D;
            pose: {
                angry: string;
                happy: string;
                upset: string;
            };
        };
    };
    let items: {
        sword: {
            name: string;
            description: string;
            image: string;
            static: boolean;
        };
        book: {
            name: string;
            description: string;
            image: string;
            static: boolean;
        };
        paper: {
            name: string;
            description: string;
            image: string;
            static: boolean;
        };
        phone: {
            name: string;
            description: string;
            image: string;
            static: boolean;
        };
        pen: {
            name: string;
            description: string;
            image: string;
            static: boolean;
        };
        clock: {
            name: string;
            description: string;
            image: string;
            static: boolean;
        };
    };
    function showCredits(): void;
    let dataForSave: {
        nameProtagonist: string;
    };
}
declare namespace Template {
    function Scene(): ƒS.SceneReturn;
}
