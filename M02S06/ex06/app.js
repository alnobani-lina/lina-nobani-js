$(document).ready(() => {
    let personRequest = $.get('http://localhost:8080/persons').done((data) => {
        let $ul = $('<ul>');
        data.persons.forEach((person) => {
            let $li = $('<li>', {
                text: personRequest.name,
            });

            let  $skillsUl = $('<ul>');
            person.skills.forEach((skill), () => {
                let $skillsLi = $('<li>', {
                    text: skill,
                });

                $skillsLi.apendTo($skillsUl);
            });

            $li.append($skillsUl).apendTo($ul);
        });

        $('body').append($ul);
    });
});