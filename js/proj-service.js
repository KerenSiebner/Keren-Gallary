
var gProjects


function createProjects() {
  gProjects = [
    _createProject("MineSweeper", "Find the mines", "Try to locate the mines without stepping on them", "https://kerensiebner.github.io/MineSweeper/", 1669408725000, ["minesweeper", "game"]),
    _createProject("Ball-Board", "Play ball on a board", "Try to locate the mines without stepping on them", "https://kerensiebner.github.io/Ball-Board/", 1669235925000, ["minesweeper", "game"]),
    _createProject("In-Picture", "Identifying pictures", "Pick the right picture description", "https://kerensiebner.github.io/In-Picture-Game/", 1668717525000, ["minesweeper", "game"]),
    _createProject("Touch Nums", "Count on click", "Click the numbers on the boards by order", "https://kerensiebner.github.io/Touch-Nums/", 1668717525000, ["minesweeper", "game"]),
    _createProject("Todos", "Customized todo list", "Customized todo list", " https://kerensiebner.github.io/Todo/", 1669840725000, ["minesweeper", "game"]),
    _createProject("Books Shop", "Book store navigator", "Try to locate the mines without stepping on them", "https://kerensiebner.github.io/Book-Shop/", 1669927125000, ["minesweeper", "game"]),
  ]
}

function _createProject(name, title, description, url, publishedAt, labels) {
  return {
    id: name.toLowerCase(),
    name,
    title,
    description,
    url,
    publishedAt,
    labels
  }
}

function renderProtfolioSection() {
  var $elProjects = $('.projects-container')
  var strHTML = ''
  for (var i = 0; i < gProjects.length; i++) {
    strHTML += `        
      <div class="col-md-4 col-sm-6 portfolio-item">
        <a class="portfolio-link" data-toggle="modal" href="#portfolioModal${i + 1}">
          <div class="portfolio-hover">
            <div class="portfolio-hover-content">
              <i class="fa fa-plus fa-3x"></i>
            </div>
          </div>
          <img class="img-fluid" src="img/portfolio/0${i + 1}-thumbnail.jpg" alt="">
        </a>
        <div class="portfolio-caption">
          <h4>${gProjects[i].name}</h4>
          <p class="text-muted">${gProjects[i].title}</p>
        </div>
        </div>`
  }
  $elProjects.html(strHTML)
}

function renderPortfolioModals() {
  var $elModals = $('.portfolio-modals')
  var strHTML = ''
  for (var i = 0; i < gProjects.length; i++) {
    strHTML += `        
    <div class="portfolio-modal modal fade" id="portfolioModal${i + 1}" tabindex="-1" role="dialog" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="close-modal" data-dismiss="modal">
          <div class="lr">
            <div class="rl"></div>
          </div>
        </div>
        <div class="container">
          <div class="row">
            <div class="col-lg-8 mx-auto">
              <div class="modal-body">
                <!-- Project Details Go Here -->
                <h2>${gProjects[i].name}</h2>
                <p class="item-intro text-muted">${gProjects[i].description}</p>
                <img class="img-fluid d-block mx-auto" src="img/portfolio/0${i + 1}-full.jpg" alt="">
                <p>${gProjects[i].description}</p>
                <ul class="list-inline">
                  <li>Date: ${new Date(gProjects[i].publishedAt).toLocaleDateString("en-GB")}</li>
                  <li>Category: ${gProjects[i].labels}</li>
                </ul>
                <button class="btn btn-primary btn-link-proj" onclick="location.href='${gProjects[i].url}'">Click for the real thing!</button>
                <button class="btn btn-primary" data-dismiss="modal" type="button">
                    <i class="fa fa-times"></i>
                    Close Project</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>`
  }
  $elModals.html(strHTML)
}

function renderForm() {
  var $elForm = $('.contact-form')
  var strHTML = ` <div class="mb-3">
  <label for="exampleInputEmail1" class="form-label" placeholder="name@example.com">Email address</label>
  <input type="email" class="form-control input-email" id="exampleInputEmail1" aria-describedby="emailHelp">
</div>
<div class="mb-3">
  <label for="exampleInputSubject1" class="form-label" placeholder="Type subject here">Subject</label>
  <input type="Subject" class="form-control input-subject" id="exampleInputSubject1">
</div>
<div class="form-floating">
  <textarea class="form-control input-body" placeholder="Type message text here" id="floatingTextarea"></textarea>
  <label for="floatingTextarea"></label>
</div>
<button type="submit" class="btn btn-primary btn-submit">Submit</button>`
  $elForm.html(strHTML)
}

function addEventListeners() {
  $('.btn-submit').on('click', function () {
    const subject = $(this).closest('.input-subject').value
    const body = $(this).closest('.input-body').value
    window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=kerens969@gmail.com&su=${subject}&body=${body}`, "_blank")
  })

  $('.close-contact').on('click', function () {
    const $elContact = $(this).closest('.offcanvas-aside').hide()
  })
  // $('.offcanvas-btn').on('click', function () {
  //   $('.offcanvas-aside').show()
  // })

}