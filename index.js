fetchPikachu()
fetchBulbasaur()
fetchCharizard()
fetchGreninja()
fetchLucario()

$("#nav a").click(function (e) {
    e.preventDefault();
    $(".toggle").hide();
    var toShow = $(this).attr('href');
    $(toShow).show();
});

function fetchPikachu() {
    const myRequest = `https://pokeapi.co/api/v2/pokemon/pikachu` 
    fetch(myRequest)
    .then(response => {
        return response.json()
    })
    .then(data => {
        let image = data.sprites.front_default
        let name = data.forms[0].name
        let output = `
                <img src=${image}>
                <h3> ${name} </h3>
            `;
        document.getElementById('fact-box').innerHTML = output;
    })      
};
function fetchPikachuSpecs() {

 
    const myRequest = `https://pokeapi.co/api/v2/pokemon/pikachu`
    fetch(myRequest)
        .then(response => {
            return response.json()
        })
        .then(data => {
            let image = data.sprites.front_default
            let image2 = data.sprites.back_default
            let id_number = data.id
            let type1 = data.types[0].type.name
            let type2 = " "
            if (data.types.length == 2) {
                type2 = data.types[1].type.name
            }
            let height = (data.height) / 10
            let weight = (data.weight) / 10
            let attack = data.stats[1].base_stat
            let defense = data.stats[2].base_stat
            let life = data.stats[0].base_stat
            let speed = data.stats[5].base_stat
            let ability = data.abilities[0].ability.name
            let ability2 = data.abilities[1].ability.name
            let output = `

                <h5> Type: ${type1}, ${type2} </h5>
                <h5> ID: ${id_number} </h5>
                <h5> Height ${height} m(s)</h5>
                <h5> Weight: ${weight} kg(s)</h5>
                <h5> Attack : ${attack} </h5>
                <h5> Defense : ${defense} </h5>              
                <h5> Life : ${life} </h5>
                <h5> Speed : ${speed} </h5>
                <h5> Abilities: <a href=#content1" onclick="fetchPikachuAbility1()">${ability}</a>, <a href="#content2" onclick="fetchPikachuAbility2()">${ability2}</a> </h5>
                <h5> URL: ${myRequest} </h5>

            `;
            document.getElementById('specs-box').innerHTML = output;
        })

    
   
   


};



function fetchPikachuAbility1() {
    const myRequest = `https://pokeapi.co/api/v2/ability/9/`
    fetch(myRequest)
        .then(response => {
            return response.json()
        })
        .then(data => {
            let effect = data.effect_entries[1].effect
            let short_effect = data.effect_entries[1].short_effect
            let flavor_text = data.flavor_text_entries[0].flavor_text
            let output = `
                <h5> Ability Name: static</h5>
                <h5> Ability Effect: ${effect} </h5>
                <h5> Short_Effect: ${short_effect} </h5>
                <h5> Flavour Text: ${flavor_text} </h5>
                <h5> URL: ${myRequest} </h5>

            `;
            document.getElementById('abilities-box').innerHTML = output;
        })
};

function fetchPikachuAbility2() {
    const myRequest = `https://pokeapi.co/api/v2/ability/31/`
    fetch(myRequest)
        .then(response => {
            return response.json()
        })
        .then(data => {
            let effect = data.effect_entries[1].effect
            let short_effect = data.effect_entries[1].short_effect
            let flavor_text = data.flavor_text_entries[0].flavor_text
            let output = `
                <h5> Ability Name: lightning-rod</h5>
                <h5> Ability Effect: ${effect} </h5>
                <h5> Short_Effect: ${short_effect} </h5>
                <h5> Flavour Text: ${flavor_text} </h5>
                <h5> URL: ${myRequest} </h5>

            `;
            document.getElementById('abilities-box').innerHTML = output;
        })
};

function fetchBulbasaur() {
    const myRequest = `https://pokeapi.co/api/v2/pokemon/bulbasaur` 
    fetch(myRequest)
    .then(response => {
        return response.json()
    })
    .then(data => {
        let image = data.sprites.front_default
        let name = data.forms[0].name
        let output = `
                <img src=${image}>
                <h3> ${name} </h3>
            `;
        document.getElementById('fact-box2').innerHTML = output;
    })

   
};


function fetchBulbasaurSpecs() {
    const myRequest = `https://pokeapi.co/api/v2/pokemon/bulbasaur`
    fetch(myRequest)
        .then(response => {
            return response.json()
        })
        .then(data => {
            let image = data.sprites.front_default
            let image2 = data.sprites.back_default
            let id_number = data.id
            let type1 = data.types[0].type.name
            let type2 = " "
            if (data.types.length == 2) {
                type2 = data.types[1].type.name
            }
            let height = (data.height) / 10
            let weight = (data.weight) / 10
            let attack = data.stats[1].base_stat
            let defense = data.stats[2].base_stat
            let life = data.stats[0].base_stat
            let speed = data.stats[5].base_stat
            let ability = data.abilities[0].ability.name
            let ability2 = data.abilities[1].ability.name
            let output = `
                
                <h5> Type: ${type1}, ${type2} </h5>
                <h5> ID: ${id_number} </h5>
                <h5> Height ${height} m(s)</h5>
                <h5> Weight: ${weight} kg(s)</h5>
                <h5> Attack : ${attack} </h5>
                <h5> Defense : ${defense} </h5>              
                <h5> Life : ${life} </h5>
                <h5> Speed : ${speed} </h5>
               <h5> Abilities: <a href=#content1" onclick="fetchBulbasaurAbility1()">${ability}</a>, <a href="#content2" onclick="fetchBulbasaurAbility2()">${ability2}</a> </h5>
                <h5> URL: ${myRequest} </h5>

            `;
            document.getElementById('specs-box').innerHTML = output;
        })
    
    
};


function fetchBulbasaurAbility1() {
    const myRequest = `https://pokeapi.co/api/v2/ability/65/`
    fetch(myRequest)
        .then(response => {
            return response.json()
        })
        .then(data => {
            let effect = data.effect_entries[0].effect
            let short_effect = data.effect_entries[1].short_effect
            let flavor_text = data.flavor_text_entries[0].flavor_text
            let output = `
                <h5> Ability Name: overgrow</h5>
                <h5> Ability Effect: ${effect} </h5>
                <h5> Short_Effect: ${short_effect} </h5>
                <h5> Flavour Text: ${flavor_text} </h5>
                <h5> URL: ${myRequest} </h5>

            `;
            document.getElementById('abilities-box').innerHTML = output;
        })
};

function fetchBulbasaurAbility2() {
    const myRequest = `https://pokeapi.co/api/v2/ability/34/`
    fetch(myRequest)
        .then(response => {
            return response.json()
        })
        .then(data => {
            let effect = data.effect_entries[1].effect
            let short_effect = data.effect_entries[1].short_effect
            let flavor_text = data.flavor_text_entries[0].flavor_text
            let output = `
                <h5> Ability Name: chlorophyll</h5>
                <h5> Ability Effect: ${effect} </h5>
                <h5> Short_Effect: ${short_effect} </h5>
                <h5> Flavour Text: ${flavor_text} </h5>
                <h5> URL: ${myRequest} </h5>

            `;
            document.getElementById('abilities-box').innerHTML = output;
        })
};

function fetchCharizard() {
    const myRequest = `https://pokeapi.co/api/v2/pokemon/charizard` 
    fetch(myRequest)
    .then(response => {
        return response.json()
    })
    .then(data => {
        let image = data.sprites.front_default
        let name = data.forms[0].name
        let output = `
                <img src=${image}>
                <h3> ${name} </h3>
            `;
        document.getElementById('fact-box3').innerHTML = output;
    })   
};

function fetchCharizardSpecs() {
    const myRequest = `https://pokeapi.co/api/v2/pokemon/charizard`
    fetch(myRequest)
        .then(response => {
            return response.json()
        })
        .then(data => {
            let image = data.sprites.front_default
            let image2 = data.sprites.back_default
            let id_number = data.id
            let type1 = data.types[0].type.name
            let type2 = " "
            if (data.types.length == 2) {
                type2 = data.types[1].type.name
            }
            let height = (data.height) / 10
            let weight = (data.weight) / 10
            let attack = data.stats[1].base_stat
            let defense = data.stats[2].base_stat
            let life = data.stats[0].base_stat
            let speed = data.stats[5].base_stat
            let ability = data.abilities[0].ability.name
            let ability2 = data.abilities[1].ability.name
            let output = `
                
                <h5> Type: ${type1}, ${type2} </h5>
                <h5> ID: ${id_number} </h5>
                <h5> Height ${height} m(s)</h5>
                <h5> Weight: ${weight} kg(s)</h5>
                <h5> Attack : ${attack} </h5>
                <h5> Defense : ${defense} </h5>              
                <h5> Life : ${life} </h5>
                <h5> Speed : ${speed} </h5>
               <h5> Abilities: <a href=#content1" onclick="fetchCharizardAbility1()">${ability}</a>, <a href="#content2" onclick="fetchCharizardAbility2()">${ability2}</a> </h5>
                <h5> URL: ${myRequest} </h5>

            `;
            document.getElementById('specs-box').innerHTML = output;
        })
  
  
};

function fetchCharizardAbility1() {
    const myRequest = `https://pokeapi.co/api/v2/ability/66/`
    fetch(myRequest)
        .then(response => {
            return response.json()
        })
        .then(data => {
            let effect = data.effect_entries[1].effect
            let short_effect = data.effect_entries[1].short_effect
            let flavor_text = data.flavor_text_entries[0].flavor_text
            let output = `
                <h5> Ability Name: blaze</h5>
                <h5> Ability Effect: ${effect} </h5>
                <h5> Short_Effect: ${short_effect} </h5>
                <h5> Flavour Text: ${flavor_text} </h5>
                <h5> URL: ${myRequest} </h5>

            `;
            document.getElementById('abilities-box').innerHTML = output;
        })
};

function fetchCharizardAbility2() {
    const myRequest = `https://pokeapi.co/api/v2/ability/94/`
    fetch(myRequest)
        .then(response => {
            return response.json()
        })
        .then(data => {
            let effect = data.effect_entries[1].effect
            let short_effect = data.effect_entries[1].short_effect
            let flavor_text = data.flavor_text_entries[0].flavor_text
            let output = `
                <h5> Ability Name: solar-power</h5>
                <h5> Ability Effect: ${effect} </h5>
                <h5> Short_Effect: ${short_effect} </h5>
                <h5> Flavour Text: ${flavor_text} </h5>
                <h5> URL: ${myRequest} </h5>

            `;
            document.getElementById('abilities-box').innerHTML = output;
        })
};

function fetchGreninja() {
    const myRequest = `https://pokeapi.co/api/v2/pokemon/greninja` 
    fetch(myRequest)
    .then(response => {
        return response.json()
    })
    .then(data => {
        let image = data.sprites.front_default
        let name = data.forms[0].name
        let output = `
                <img src=${image}>
                <h3> ${name} </h3>
            `;
        document.getElementById('fact-box4').innerHTML = output;
    })     
};

function fetchGreninjaSpecs() {
    const myRequest = `https://pokeapi.co/api/v2/pokemon/greninja`
    fetch(myRequest)
        .then(response => {
            return response.json()
        })
        .then(data => {
            let image = data.sprites.front_default
            let image2 = data.sprites.back_default
            let id_number = data.id
            let type1 = data.types[0].type.name
            let type2 = " "
            if (data.types.length == 2) {
                type2 = data.types[1].type.name
            }
            let height = (data.height) / 10
            let weight = (data.weight) / 10
            let attack = data.stats[1].base_stat
            let defense = data.stats[2].base_stat
            let life = data.stats[0].base_stat
            let speed = data.stats[5].base_stat
            let ability = data.abilities[0].ability.name
            let ability2 = data.abilities[1].ability.name
            let output = `
                
                <h5> Type: ${type1}, ${type2} </h5>
                <h5> ID: ${id_number} </h5>
                <h5> Height ${height} m(s)</h5>
                <h5> Weight: ${weight} kg(s)</h5>
                <h5> Attack : ${attack} </h5>
                <h5> Defense : ${defense} </h5>              
                <h5> Life : ${life} </h5>
                <h5> Speed : ${speed} </h5>
                <h5> Abilities: <a href=#content1" onclick="fetchGreninjaAbility1()">${ability}</a>, <a href="#content2" onclick="fetchGreninjaAbility2()">${ability2}</a> </h5>
                <h5> URL: ${myRequest} </h5>

            `;
            document.getElementById('specs-box').innerHTML = output;
        })
   
 
};

function fetchGreninjaAbility1() {
    const myRequest = `https://pokeapi.co/api/v2/ability/67/`
    fetch(myRequest)
        .then(response => {
            return response.json()
        })
        .then(data => {
            let effect = data.effect_entries[1].effect
            let short_effect = data.effect_entries[1].short_effect
            let flavor_text = data.flavor_text_entries[6].flavor_text
            let output = `
                <h5> Ability Name: torrent</h5>
                <h5> Ability Effect: ${effect} </h5>
                <h5> Short_Effect: ${short_effect} </h5>
                <h5> Flavour Text: ${flavor_text} </h5>
                <h5> URL: ${myRequest} </h5>

            `;
            document.getElementById('abilities-box').innerHTML = output;
        })
};

function fetchGreninjaAbility2() {
    const myRequest = `https://pokeapi.co/api/v2/ability/168/`
    fetch(myRequest)
        .then(response => {
            return response.json()
        })
        .then(data => {
            let effect = data.effect_entries[1].effect
            let short_effect = data.effect_entries[1].short_effect
            let flavor_text = data.flavor_text_entries[6].flavor_text
            let output = `
                <h5> Ability Name: protean</h5>
                <h5> Ability Effect: ${effect} </h5>
                <h5> Short_Effect: ${short_effect} </h5>
                <h5> Flavour Text: ${flavor_text} </h5>
                <h5> URL: ${myRequest} </h5>

            `;
            document.getElementById('abilities-box').innerHTML = output;
        })
};

function fetchLucario() {
    const myRequest = `https://pokeapi.co/api/v2/pokemon/lucario` 
    fetch(myRequest)
    .then(response => {
        return response.json()
    })
    .then(data => {
        let image = data.sprites.front_default
        let name = data.forms[0].name
        let output = `
                <img src=${image}>
                <h3> ${name} </h3>
            `;
        document.getElementById('fact-box5').innerHTML = output;
    })     
};

function fetchLucarioSpecs() {
    const myRequest = `https://pokeapi.co/api/v2/pokemon/lucario`
    fetch(myRequest)
        .then(response => {
            return response.json()
        })
        .then(data => {
            let image = data.sprites.front_default
            let image2 = data.sprites.back_default
            let id_number = data.id
            let type1 = data.types[0].type.name
            let type2 = " "
            if (data.types.length == 2) {
                type2 = data.types[1].type.name
            }
            let height = (data.height) / 10
            let weight = (data.weight) / 10
            let attack = data.stats[1].base_stat
            let defense = data.stats[2].base_stat
            let life = data.stats[0].base_stat
            let speed = data.stats[5].base_stat
            let ability = data.abilities[0].ability.name
            let ability2 = data.abilities[1].ability.name
            let output = `
                
                <h5> Type: ${type1}, ${type2} </h5>
                <h5> ID: ${id_number} </h5>
                <h5> Height ${height} m(s)</h5>
                <h5> Weight: ${weight} kg(s)</h5>
                <h5> Attack : ${attack} </h5>
                <h5> Defense : ${defense} </h5>              
                <h5> Life : ${life} </h5>
                <h5> Speed : ${speed} </h5>
                <h5> Abilities: <a href=#content1" onclick=" fetchLucarioAbility1()">${ability}</a>, <a href="#content2" onclick="fetchLucarioAbility2()">${ability2}</a> </h5>
                <h5> URL: ${myRequest} </h5>

            `;
            document.getElementById('specs-box').innerHTML = output;
        })
   
 
};

function fetchLucarioAbility1() {
    const myRequest = `https://pokeapi.co/api/v2/ability/80/`
    fetch(myRequest)
        .then(response => {
            return response.json()
        })
        .then(data => {
            let effect = data.effect_entries[1].effect
            let short_effect = data.effect_entries[1].short_effect
            let flavor_text = data.flavor_text_entries[0].flavor_text
            let output = `
                <h5> Ability Name: steadfast</h5>
                <h5> Ability Effect: ${effect} </h5>
                <h5> Short_Effect: ${short_effect} </h5>
                <h5> Flavour Text: ${flavor_text} </h5>
                <h5> URL: ${myRequest} </h5>

            `;
            document.getElementById('abilities-box').innerHTML = output;
        })
};

function fetchLucarioAbility2() {
    const myRequest = `https://pokeapi.co/api/v2/ability/39/`
    fetch(myRequest)
        .then(response => {
            return response.json()
        })
        .then(data => {
            let effect = data.effect_entries[1].effect
            let short_effect = data.effect_entries[1].short_effect
            let flavor_text = data.flavor_text_entries[0].flavor_text
            let output = `
                <h5> Ability Name: inner-focus</h5>
                <h5> Ability Effect: ${effect} </h5>
                <h5> Short_Effect: ${short_effect} </h5>
                <h5> Flavour Text: ${flavor_text} </h5>
                <h5> URL: ${myRequest} </h5>

            `;
            document.getElementById('abilities-box').innerHTML = output;
        })
};