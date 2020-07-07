$(document).ready(() => {
    let $form = $('#personForm');
    let $personDetails = $('.personDetails');

    $form.on('submit', (event) => {
        let formData = $(event.currentTarget).serializeArray();
        
        let $personFragment = $('<div>');

        $personDetails.empty();
        formFields.forEach((field) => {
            $personFragment.append($('<p>', {
                text: `${field.name}: ${field.value}`,
            })
           );
        });

        $personFragment.appendTo($personDetails);

        event.preventDefault();
    });
});