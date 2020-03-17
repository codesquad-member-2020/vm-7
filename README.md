# web-vending-machine

### 고민하거나 개선했던 사항 그냥 기록...

 - this.wallet 객체를 넘겨서 렌더링을 하면 바뀌지 않은 금액도 같이 랜더링되어서 스위치문으로 나눠서 타겟을 각각 정해서 notify를 하여 바뀐 부분만 렌더링 하도록 노력하였다.

 - 총금액이 변경될때 notify의 인자로 계산된 총액을 전달할지 차감될 해당 금액만 보낼지 고민
 -> 차감될 해당 금액만 보내는것이 맞는것 같다.

 - 총액에서 빠지는 금액이 얼마인지(e.target.value) 필요한 (변수)와
 빠진 금액을 누적할 (변수)가 필요하다.
 
 - 기록되는 (로그)를 분기처리에서 넘겨줘서 추가해줘야 할듯(ul > li 태그로 추가) 

 - 상품 선택 view에서 [취소 버튼]을 누르면 입력된 금액을 기억해두었다가 반환을 그대로 해줘야 할것 같다.

  번호는 누르면 상품선택 번호가 바뀌어야 한다. 
  - 상품 갯수를 넘으면 번호 버튼을 비활성화 시켜야 할것같다[상품개수는 최대 12개]
    ( 처음 시작할때 0버튼은 비활성화, 1을 누르면  0, 1, 2 버튼을 제외한 번호 버튼이 모두 비활성화 되어야 한다)

천원을 투입한다음에 300원 상품을 사고 나머지가 700일때 반환을 요청하면 
  -  100원짜리 7개?
  -  500원 1개 100원 2개
  - 10원.. 50원...
   반환할때는 기억해놓은 값이 사라지면 환전 할 수 있는 최대 금액부터 반환되게끔 해야 할것 같다  => 500원1개 100원2개

반환에 필요한
기억해야될 배열 

    this.walletInfo = {
      cash_10:  {value : 10, number: 5},
      cash_50: {value : 50, number: 5},
      cash_100: {value : 100, number: 3},
      cash_500: {value : 500, number: 3},
      cash_1000: {value : 1000, number: 3},
      cash_5000: {value : 5000, number: 2},
      cash_10000: {value : 10000, number: 1},
    };  
    // 이것도 안씀..

1. 투입된 금액 배열 :  [10, 10, 50, 50]

뺴주는 부분에서 더해야 하나...


2. 지불한 다음에 남은 거스름돈 배열 : []
3. 나눠야할 금액 범위를 정해야 할듯


인터페이스 view를 만들어두고, 

view3개가 각각 생성되어서 구독, 필요한데이터만객체로 받아오고...

모델은 2개, usermodel, vendingmodel  

컨트롤러에서 모델 get해서  데이터 변경을 시켜주고 모델에서 set[동전 갯수 금액부분...]

addevent는 뷰에서 하도록...


1. 옵저버 클래스 직접 만들어보기, 타입으로 옵저버를 구독 할때 구분되도록

2. 컴포넌트화로 잘게 쪼개서 그걸 합쳐서 뷰를 그려보기, 컴포넌트들은 태그를 스트링으로 가지고있게 해야 될듯

3. 데코레이터 패턴을 적용할 곳이 잇는지? 상속의 단점을 줄이고싶어서..

4. 모델은 하나로 일단 만들어서 모든 데이터 객체를 담고있게 할 예정(결국 2개로..)

5. 뷰 > 컴포넌트로 전달될때 랜더링 될 데이터만 전달 해줘서 랜더링이 전체적으로 일어나지 않고 변경되는 부분만 변경되도록


뷰가 모델을 모르는게 좋은건가?.. 모델이 뷰를모르는게 좋은건가? 에 대한 궁금점



초기에만 모델에서 데이터를 서버에서 가져와서 뷰쪽으로 렌더링을 전체적으로 해주는데.. 일관성이 없어지는거같다..
이후에는 컨트롤러에서 모델에게 옵저버 이벤트 등록시키고 랜더되야될 해당하는 컴포넌트만 랜더함수를 호출해서 뿌려주려고 한다.


컨트롤러에서 컴포넌트의 이벤트 헨들링을 실행시켜주고 
컴포넌트 <-----> 모델 옵저버 패턴으로 이벤트가 일어나면 바뀐 모델 객체를 뷰에 전달해주어서 렌더링 작업을 하고있다.

내일 할일 : 로그 컴포넌트 로그기록 랜더링, 상품선택 컴포넌트 이벤트
