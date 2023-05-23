let payCardService = ((function(){
  function getList(callback){
    $.ajax({
      url: "",
      data: JSON.stringify({"cardNumber":cardNumber, "cardExpireDate":cardExpireDate, "memberName":memberName }),
      contentType: "application/json; charset=utf-8",
      success: function(cards){
        if(callback) {
          callback(cards);
        }
      }
    });

  }
  return {getList: getList};

})());

payCardService.getList(showList);

function showList(cards){
  cards.forEach(card => {
    let number1 = card.cardNumber.substring(0, 3);
    let number2 = card.cardNumber.substring(4, 7);
    let number3 = card.cardNumber.substring(8, 11);
    let number4 = card.cardNumber.substring(12, 15);
    //SimplePayCard_simplecard__2wYo7 객체에 text append
    let text = `   <div class="SimplePayCard_unregisted__2uiqp">
                        <div class="checkout">
                          <div class="credit-card-box">
                            <div class="flip">
                              <div class="front" style="background: ${
        color[Math.floor(Math.random() * 6)]
    }; cursor:pointer; margin-right: 30px; ">
                                <div class="chip"></div>
                                <div class="logo">
                                  <svg
                                    version="1.1"
                                    id="visa"
                                    width="47.834px"
                                    height="47.834px"
                                    viewBox="0 0 47.834 47.834"
                                    style="enable-background: new 0 0 47.834 47.834"
                                  >
                                    <g>
                                      <g>
                                        <path
                                          d="M44.688,16.814h-3.004c-0.933,0-1.627,0.254-2.037,1.184l-5.773,13.074h4.083c0,0,0.666-1.758,0.817-2.143
                                                 c0.447,0,4.414,0.006,4.979,0.006c0.116,0.498,0.474,2.137,0.474,2.137h3.607L44.688,16.814z M39.893,26.01
                                                 c0.32-0.819,1.549-3.987,1.549-3.987c-0.021,0.039,0.317-0.825,0.518-1.362l0.262,1.23c0,0,0.745,3.406,0.901,4.119H39.893z
                                                 M34.146,26.404c-0.028,2.963-2.684,4.875-6.771,4.875c-1.743-0.018-3.422-0.361-4.332-0.76l0.547-3.193l0.501,0.228
                                                 c1.277,0.532,2.104,0.747,3.661,0.747c1.117,0,2.313-0.438,2.325-1.393c0.007-0.625-0.501-1.07-2.016-1.77
                                                 c-1.476-0.683-3.43-1.827-3.405-3.876c0.021-2.773,2.729-4.708,6.571-4.708c1.506,0,2.713,0.31,3.483,0.599l-0.526,3.092
                                                 l-0.351-0.165c-0.716-0.288-1.638-0.566-2.91-0.546c-1.522,0-2.228,0.634-2.228,1.227c-0.008,0.668,0.824,1.108,2.184,1.77
                                                 C33.126,23.546,34.163,24.783,34.146,26.404z M0,16.962l0.05-0.286h6.028c0.813,0.031,1.468,0.29,1.694,1.159l1.311,6.304
                                                 C7.795,20.842,4.691,18.099,0,16.962z M17.581,16.812l-6.123,14.239l-4.114,0.007L3.862,19.161
                                                 c2.503,1.602,4.635,4.144,5.386,5.914l0.406,1.469l3.808-9.729L17.581,16.812L17.581,16.812z M19.153,16.8h3.89L20.61,31.066
                                                 h-3.888L19.153,16.8z"
                                        />
                                      </g>
                                    </g>
                                  </svg>
                                </div>
                                <div class="number"></div>
                                <div class="card-holder">
                                  <label>${card.memberName}</label>
                                  <div class="card-num">${number1}-${number2}-${number3}-${number4}</div>
                                  <div class="card-num"></div>
                                </div>
                                <div class="card-expiration-date">
                                  <label>Expires</label>
                                  <div class="card-date">${card.cardExpireDate}</div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <br/><br/>
                      </div>
                      `;
  });
}

$('.SimplePayCard_simplecard__2wYo7').append(text);

/*퍼블리싱*/
// confirm-button 버튼 요소 저장
let $confirmButton = $('.confirm-button');

// check 클래스명을 가진 input 요소 검색
let $checkInputs = $('.check');

// count 변수
let count = 0;

// 색상 배열에 담기
let color = ['red', 'blue', 'yellow', 'black', 'pink', 'brown', 'green'];

$('.SimplePayCard_addCard__2eagF').on('click', function () {
  $('.ReactModalPortal').css('display', 'block');
});

$('.SimplePayInfoFormNavBar_closeButton__MzCd0').on('click', function () {
  $('.ReactModalPortal').css('display', 'none');
  $('.check').val('');
  $confirmButton.attr('disabled', true);
  $confirmButton.css('opacity', '0.49');
  $confirmButton.css('cursor', 'default');
});

// maxlangth

function maxLengthCheck(object) {
  if (object.value.length > object.maxLength) {
    object.value = object.value.slice(0, object.maxLength);
  }
}

$(document).on('keyup', '.date-input', function () {
  let _slash = this.value;
  _slash = _slash.replace(/(\d{2})(\d{2})/, '$1/$2');
  this.value = _slash;
});

$(document).on('click', '.SimplePayCard_unregisted__2uiqp', function () {
  $('#alertify-o-cover').css('display', 'block');
  $('#alertify-o').css('display', 'block');

  let id = $(this).attr('id');
  console.log(id);
  $('.no-button').on('click', function () {
    $('#alertify-o-cover').css('display', 'none');
    $('#alertify-o').css('display', 'none');
  });

  $('.yes-button').on('click', function () {
    $('#' + id).remove();
    $('#alertify-o-cover').css('display', 'none');
    $('#alertify-o').css('display', 'none');
  });
});

// 버튼활성화

// $('.check').on('keyup', function () {
//   $('.check').each((i, item) => {
//     if ($('.check').eq(i).val() != '') {
//       $('.confirm-button').css('opacity', '1');
//       $('.confirm-button').css('cursor', 'pointer');
//       $('.confirm-button').attr('disabled', false);
//     }
//   });
// });

// check 클래스명을 가진 input 요소에 대해 keyup 이벤트 등록
$checkInputs.on('keyup', function () {
  // 값이 없는 input 요소 검색
  var $emptyInputs = $checkInputs.filter(function () {
    return !$(this).val();
  });

  // 값이 없는 input 요소가 있는 경우
  if ($emptyInputs.length > 0) {
    $('.confirm-button').css('opacity', '0.49');
    $('.confirm-button').css('cursor', 'default');
    $('.confirm-button').attr('disabled', true); // 버튼 비활성화
  } else {
    // 모든 input 요소에 값이 있는 경우
    $confirmButton.prop('disabled', false);
    $('.confirm-button').css('opacity', '1');
    $('.confirm-button').css('cursor', 'pointer'); // 버튼 활성화
  }
});

console.log($confirmButton.prop('disabled'));

if ($confirmButton.attr('disabled') !== undefined) {
  $confirmButton.on('click', function () {
    let text = `  
   <div id="${count++}" class="SimplePayCard_unregisted__2uiqp">
    <div class="checkout">
      <div class="credit-card-box">
        <div class="flip">
          <div class="front" style="background: ${
            color[Math.floor(Math.random() * 6)]
          }; cursor:pointer; margin-right: 30px; ">
            <div class="chip"></div>
            <div class="logo">
              <svg
                version="1.1"
                id="visa"
                width="47.834px"
                height="47.834px"
                viewBox="0 0 47.834 47.834"
                style="enable-background: new 0 0 47.834 47.834"
              >
                <g>
                  <g>
                    <path
                      d="M44.688,16.814h-3.004c-0.933,0-1.627,0.254-2.037,1.184l-5.773,13.074h4.083c0,0,0.666-1.758,0.817-2.143
                             c0.447,0,4.414,0.006,4.979,0.006c0.116,0.498,0.474,2.137,0.474,2.137h3.607L44.688,16.814z M39.893,26.01
                             c0.32-0.819,1.549-3.987,1.549-3.987c-0.021,0.039,0.317-0.825,0.518-1.362l0.262,1.23c0,0,0.745,3.406,0.901,4.119H39.893z
                             M34.146,26.404c-0.028,2.963-2.684,4.875-6.771,4.875c-1.743-0.018-3.422-0.361-4.332-0.76l0.547-3.193l0.501,0.228
                             c1.277,0.532,2.104,0.747,3.661,0.747c1.117,0,2.313-0.438,2.325-1.393c0.007-0.625-0.501-1.07-2.016-1.77
                             c-1.476-0.683-3.43-1.827-3.405-3.876c0.021-2.773,2.729-4.708,6.571-4.708c1.506,0,2.713,0.31,3.483,0.599l-0.526,3.092
                             l-0.351-0.165c-0.716-0.288-1.638-0.566-2.91-0.546c-1.522,0-2.228,0.634-2.228,1.227c-0.008,0.668,0.824,1.108,2.184,1.77
                             C33.126,23.546,34.163,24.783,34.146,26.404z M0,16.962l0.05-0.286h6.028c0.813,0.031,1.468,0.29,1.694,1.159l1.311,6.304
                             C7.795,20.842,4.691,18.099,0,16.962z M17.581,16.812l-6.123,14.239l-4.114,0.007L3.862,19.161
                             c2.503,1.602,4.635,4.144,5.386,5.914l0.406,1.469l3.808-9.729L17.581,16.812L17.581,16.812z M19.153,16.8h3.89L20.61,31.066
                             h-3.888L19.153,16.8z"
                    />
                  </g>
                </g>
              </svg>
            </div>
            <div class="number"></div>
            <div class="card-holder">
              <label>Card holder</label>
<!--              <div class="card-num">${$('.num1').val()}-${$('.num2').val()}-${$('.num3').val()}-${$('.num4').val()}</div>-->
              <div class="card-num"></div>
            </div>
            <div class="card-expiration-date">
              <label>Expires</label>
              <div class="card-date">${$('.date-input').val()}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <br/><br/>
  </div>
  `;

    $('.SimplePayCard_simplecard__2wYo7').prepend(text);
    $('.ReactModalPortal').css('display', 'none');
    $('.check').val('');
    $confirmButton.attr('disabled', true);
    $confirmButton.css('opacity', '0.49');
    $confirmButton.css('cursor', 'default');
  });
}
