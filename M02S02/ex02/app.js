$(document).ready(() => {
    let $form = $('#personForm');
    let $personDetails = $('.person-details');
  
    let textCaptureForm = () => {
      let $formFragment = $('<div>');
  
      return $formFragment
        .append('<label for="skill-rename">Editare</label>')
        .append(
          $('<input>', {
            type: 'text',
            name: 'skill-rename',
          }),
        )
        .append(
          `
            <button type="button" id="editSkill">Salvare</button>
            <button type="button" id="cancelEditSkill">Anulare</button>
          `,
        );
    };
  
    $('body').append(textCaptureForm());
  
    $form.on('submit', (event) => {
      let formFields = $(event.currentTarget).serializeArray();
      let $personFragment = $('<div>');
  
      $personDetails.empty();
  
      formFields.forEach((field) => {
        let $labelElement = $(`input[name="${field.name}"]`).prev();
        let displayName = $labelElement.text();
  
        $personFragment.append(
          $('<p>', {
            text: `${displayName} ${field.value}`,
          }),
        );
      });
  
      $personFragment.appendTo($personDetails);
      // $personDetails.empty().append($personFragment);
  
      event.currentTarget.reset();
      event.preventDefault();
    });
  
    $('#addSkill').on('click', (event) => {
      // let skillName = $(event.currentTarget).prev().val();
      let $skillInput = $(event.currentTarget).prev();
      let skillName = $skillInput.val();
  
      if (skillName.length < 1) {
        return;
      }
  
      let ulClass = 'skills-ul';
      let $skillsUl = $(`.${ulClass}`);
  
      if ($skillsUl.length < 1) {
        $skillsUl = $('<ul>', {
          class: ulClass,
        })
          .appendTo('.person-skills')
          .on('click', 'skill-delete', (event) => {
            // console.log(event.currentTarget);
            $(event.currentTarget).parent().remove();
          })
          .on('click', '.skill-edit', (event) => {
              $(event.currentTarget).parent().prepend(textCaptureForm());
          })
          .on('click', '.skill-edit-cancel', (event) => {
            $(event.currentTarget).parent().remove();
          });
      }
  
      $skillsUl.append(
        `
          <li>
            ${skillName}
            <button type="button", class="skill-delete">Sterge</button>
            <button class="skill-edit">edit</button>
          </li>
        `,
      );
  
      $skillInput.val('');
    });
  });