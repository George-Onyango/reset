// Business logic
function calculateTotal() {
    var total = 0;
    // get pizza sizes
    $(".pizsize").each(function () {
        if (this.checked) {
            total = total + parseInt($(this).value);
        }
    })
    $(".pizcrust").each(function () {
        if (this.checked) {
            total = total + parseInt($(this).value);
        }
    })
    return total;
}

// pizza sizes
// constructor
function pizzaSize(small, medium, large) {
    this.small = small[0];
    this.medium = medium[0];
    this.large = large[0];
}

// calculate pizza sizes total
pizzaSize.prototype.getTotal = function () {
    var total = 0;
    if (this.small.checked) {
        total = total + parseInt(this.small.value);
    }

    if (this.medium.checked) {
        total = total + parseInt(this.medium.value);
    }

    if (this.large.checked) {
        total = total + parseInt(this.large.value);
    }
    return total;
}

// Type of Crust
// constructor
function typeOfCrust(Crispy, Glutenfree, Stuffed) {
    this.Crispy = Crispy[0];
    this.Glutenfree = Glutenfree[0];
    this.Stuffed = Stuffed[0];
}
// calculate pizza crust total
typeOfCrust.prototype.getTotal = function () {
    var total = 0;
    if (this.Crispy.checked) {
        total = total + parseInt(this.Crispy.value);
    }

    if (this.Glutenfree.checked) {
        total = total + parseInt(this.Glutenfree.value);
    }

    if (this.Stuffed.checked) {
        total = total + parseInt(this.Stuffed.value);
    }
    return total;
}

// pizza cheese
//constuctor
function pizzaCheese(price, Morzarella, Cheddar, Feta) {
    this.Morzarella = Morzarella[0];
    this.Cheddar = Cheddar[0];
    this.Feta = Feta[0];
    this.price = price;
}
//calculate cheese total
pizzaCheese.prototype.getTotal = function () {
    var total = 0;
    if (this.Morzarella.checked) {
        total = total + this.price;
    }

    if (this.Cheddar.checked) {
        total = total + this.price;
    }

    if (this.Feta.checked) {
        total = total + this.price;
    }
    return total;
}

//Extra  Toppings
//constructors
function extraTopping(price, Macon, BbqChicken, Boerewors, ChickenTikka, SandwichBeef, Pepperoni, PeriChicken, BbqSteak) {
    this.Macon = Macon[0];
    this.BbqChicken = BbqChicken[0];
    this.Boerewors = Boerewors[0];
    this.ChickenTikka = ChickenTikka[0];
    this.SandwichBeef = SandwichBeef[0];
    this.Pepperoni = Pepperoni[0];
    this.PeriChicken = PeriChicken[0];
    this.BbqSteak = BbqSteak[0];
    this.price = price;
}

//calculate extra toppings
extraTopping.prototype.getTotal = function () {
    var total = 0;
    if (this.Macon.checked) {
        total = total + this.price;
    }

    if (this.BbqChicken.checked) {
        total = total + this.price;
    }

    if (this.Boerewors.checked) {
        total = total + this.price;
    }
    if (this.ChickenTikka.checked) {
        total = total + this.price;
    }

    if (this.SandwichBeef.checked) {
        total = total + this.price;
    }

    if (this.Pepperoni.checked) {
        total = total + this.price;
    }
    if (this.PeriChicken.checked) {
        total = total + this.price;
    }

    if (this.BbqSteak.checked) {
        total = total + this.price;
    }
    return total;
}
//Extra Veggie Toppings
//constructors
function extraVeggieToppings(price, chilli, GreenPepper, Jalapenos, Mushrooms, Olives, Onion, Pineapple, Sweetcorn) {
    this.chilli = chilli[0];
    this.GreenPepper = GreenPepper[0];
    this.Jalapenos = Jalapenos[0];
    this.Mushrooms = Mushrooms[0];
    this.Olives = Olives[0];
    this.Onion = Onion[0];
    this.Pineapple = Pineapple[0];
    this.Sweetcorn = Sweetcorn[0];
    this.price = price;
}

// calculator veggie toppings
extraVeggieToppings.prototype.getTotal = function () {
    var total = 0;
    if (this.chilli.checked) {
        total = total +  this.price;
    }

    if (this.GreenPepper.checked) {
        total = total + this.price;
    }

    if (this.Jalapenos.checked) {
        total = total + this.price;
    }
    if (this.Mushrooms.checked) {
        total = total + this.price;
    }

    if (this.Olives.checked) {
        total = total + this.price;
    }

    if (this.Onion.checked) {
        total = total + this.price;
    }
    if (this.Pineapple.checked) {
        total = total + this.price;
    }

    if (this.Sweetcorn.checked) {
        total = total + this.price;
    }
    return total;
}

// calculate small pizza size total
function calculateSmallSizeTotal() {
    // small size price
    var price = 610;
    
    // cheese toppings
    var cheeseToppingsPrice = 80,
    morzarella = $('#morzarella-small'),
    cheddar = $('#cheddar-small'),
    feta = $('#feta-small');
    var cheeseToppings = new pizzaCheese(cheeseToppingsPrice, morzarella, cheddar, feta)
    var cheeseTotal = cheeseToppings.getTotal()
    
    // extra toppings
    var extraToppingsPrice = 60,
    macon = $('#macon-small'),
    BbqChicken = $('#bbqchi-small'),
    Boerewors = $('#boer-small'),
    chickenTikka = $('#chickentik-small'),
    sandwichBeef = $('#sandwich-small'),
    Pepperoni = $('#pepperoni-small'),
    PeriChicken = $('#perichick-small'),
    BbqSteak = $('#bbqsteak-small');
    var extraToppings = new extraTopping(extraToppingsPrice, macon, BbqChicken, Boerewors, chickenTikka, sandwichBeef, Pepperoni, PeriChicken, BbqSteak);
    var extraToppingsTotal = extraToppings.getTotal()

    // extra veggie toppings
    var extraVeggieToppingsPrice = 150,
    chilli = $('#chilli-small'),
    pepper = $('#pepper-small'),
    jala = $('#jala-small'),
    mushroom = $('#mushroom-small'),
    olives = $('#olives-small'),
    onion = $('#onion-small'),
    apple = $('#apple-small'),
    sweetcorn = $('#sweetcorn-small');
    var extraVegetableToppings = new extraVeggieToppings(extraVeggieToppingsPrice, chilli, pepper, jala, mushroom, olives, onion, apple, sweetcorn);
    var extraVeggieToppingsTotal = extraVegetableToppings.getTotal()

    // calc small size total price
    var smallSizeTotal = price + cheeseTotal + extraToppingsTotal + extraVeggieToppingsTotal;
    return smallSizeTotal;
}

// calculate medium size total
function calculateMediumSizeTotal() {
    // medium size price
    var price = 880;
    
    // cheese toppings
    var cheeseToppingsPrice = 140,
    morzarella = $('#morzarella-medium'),
    cheddar = $('#cheddar-medium'),
    feta = $('#feta-medium');
    var cheeseToppings = new pizzaCheese(cheeseToppingsPrice, morzarella, cheddar, feta)
    var cheeseTotal = cheeseToppings.getTotal()
    
    // extra toppings
    var extraToppingsPrice = 180,
    macon = $('#macon-medium'),
    BbqChicken = $('#bbqchi-medium'),
    Boerewors = $('#boer-medium'),
    chickenTikka = $('#chickentik-medium'),
    sandwichBeef = $('#sandwich-medium'),
    Pepperoni = $('#pepperoni-medium'),
    PeriChicken = $('#perichick-medium'),
    BbqSteak = $('#bbqsteak-medium');
    var extraToppings = new extraTopping(extraToppingsPrice, macon, BbqChicken, Boerewors, chickenTikka, sandwichBeef, Pepperoni, PeriChicken, BbqSteak);
    var extraToppingsTotal = extraToppings.getTotal()

    // extra veggie toppings
    var extraVeggieToppingsPrice = 150,
    chilli = $('#chilli-large'),
    pepper = $('#pepper-large'),
    jala = $('#jala-large'),
    mushroom = $('#mushroom-large'),
    olives = $('#olives-large'),
    onion = $('#onion-large'),
    apple = $('#apple-large'),
    sweetcorn = $('#sweetcorn-large');
    var extraVegetableToppings = new extraVeggieToppings(extraVeggieToppingsPrice, chilli, pepper, jala, mushroom, olives, onion, apple, sweetcorn);
    var extraVeggieToppingsTotal = extraVegetableToppings.getTotal()

    // // calc small size total price
    var smallSizeTotal = price + cheeseTotal + extraToppingsTotal + extraVeggieToppingsTotal;
    return smallSizeTotal;
}

// calculate large size total
function calculateLargeSizeTotal() {
    // large size price
    var price = 1100;
    
    // cheese toppings
    var cheeseToppingsPrice = 250,
    morzarella = $('#morzarella-large'),
    cheddar = $('#cheddar-large'),
    feta = $('#feta-large');
    var cheeseToppings = new pizzaCheese(cheeseToppingsPrice, morzarella, cheddar, feta)
    var cheeseTotal = cheeseToppings.getTotal()
    
    // extra toppings
    var extraToppingsPrice = 220,
    macon = $('#macon-large'),
    BbqChicken = $('#bbqchi-large'),
    Boerewors = $('#boer-large'),
    chickenTikka = $('#chickentik-large'), 
    sandwichBeef = $('#sandwich-large'),
    Pepperoni = $('#pepperoni-large'),
    PeriChicken = $('#perichick-large'),
    BbqSteak = $('#bbqsteak-large');
    var extraToppings = new extraTopping(extraToppingsPrice, macon, BbqChicken, Boerewors, chickenTikka, sandwichBeef, Pepperoni, PeriChicken, BbqSteak);
    var extraToppingsTotal = extraToppings.getTotal()

    // extra veggie toppings
    var extraVeggieToppingsPrice = 200,
    chilli = $('#chilli-large'),
    pepper = $('#pepper-large'),
    jala = $('#jala-large'),
    mushroom = $('#mushroom-large'),
    olives = $('#olives-large'),
    onion = $('#onion-large'),
    apple = $('#apple-large'),
    sweetcorn = $('#sweetcorn-large');
    var extraVegetableToppings = new extraVeggieToppings(extraVeggieToppingsPrice, chilli, pepper, jala, mushroom, olives, onion, apple, sweetcorn);
    var extraVeggieToppingsTotal = extraVegetableToppings.getTotal()


    // calc small size total price
    var smallSizeTotal = price + cheeseTotal + extraToppingsTotal + extraVeggieToppingsTotal;
    return smallSizeTotal;
}

function calcTotal() {
    // the total
    var total = 0;

    // get pizza sizes
    var small = $('#size1')[0],
    medium = $('#size2')[0],
    large = $('#size3')[0];

    // get crust price
    var crispy = $('#crust1'),
    gluten = $('#crust2'),
    stuffed = $('#crust3');
    var crust = new typeOfCrust(crispy, gluten, stuffed)
    var crustPrice = crust.getTotal()

    // add crust price to total
    total = total + crustPrice;

    // adding small pizza size
    if (small.checked) {
        var smallTotal = calculateSmallSizeTotal()
        total = total + smallTotal;
    }

    // check medium size
    if (medium.checked) {
        var mediumTotal = calculateMediumSizeTotal()
        total = total + mediumTotal;
    }

    // check large size
    if (large.checked) {
        var largeTotal = calculateLargeSizeTotal()
        total = total + largeTotal;
    }

    return total;
}



//User Interface logic
$(document).ready(function () {
    $("#order").click(function () {
        $("#king").toggle();
    });
    $("#btn").click(function (event) {
        var client = $("#nameDetail").value;
        alert(' Dear ' + client + ' we have received the message you have sent. Kindly note that your feedback is highly appreciated ');
        event.preventDefault();
    });
    $("#size-small").click(function () {
        $("#small").slideToggle(1000);
    });
    $("#size-medium").click(function () {
        $("#medium").slideToggle(1000);
    });
    $("#size-large").click(function () {
        $("#large").slideToggle(1000);

    });

    // check checkbox in item click
    $('li').click(function() {
        var input = $(this).find('input');
        if (input.length > 0) {
            if (input[0].checked) {
                input[0].checked = false
            } else {
                input[0].checked = true
            }
        }

        // the total price
        var totalPrice = calcTotal()
        $('#total').text(totalPrice);
    })

    // calculate price on checkboxes click
    $("input[type=checkbox]").change(function () {
        // var total = calculateTotal()
        // $("#total").text(total);

        // the pizza
        // var smallSize = $("#size1")
        // var mediumSize = $("#size2")
        // var largeSize = $("#size3")
        // var pizzaSizes = new pizzaSize(smallSize, mediumSize, largeSize);
        // var pizzaSizesTotal = pizzaSizes.getTotal();

        // // the crust
        // var crispyCrust = $('#crust1')
        // var glutenFreeCrust = $("#crust2")
        // var stuffedCrust = $("#crust3")
        // var pizzaCrust = new typeOfCrust(crispyCrust, glutenFreeCrust, stuffedCrust)
        // var crustTotal = pizzaCrust.getTotal();

        // // the cheese
        // var morzarella = $("#morzarella")
        // var cheddar = $("#cheddar")
        // var feta = $("#feta")
        // var extraCheese = new pizzaCheese(morzarella, cheddar, feta)
        // var cheeseTotal = extraCheese.getTotal();

        // // toppings
        // var macon = $("#macon")
        // var BbqChicken = $("#bbqchi")
        // var Boerewors = $("#boer")
        // var chickenTikka = $("#chickentik")
        // var sandwichBeef = $("#sandwich")
        // var Pepperoni = $("#pepperoni")
        // var PeriChicken = $("#perichick")
        // var BbqSteak = $("#bbqsteak")
        // var meatAdd = new extraTopping(macon, BbqChicken, Boerewors, chickenTikka, sandwichBeef, Pepperoni, PeriChicken, BbqSteak)
        // var toppingsTotal = meatAdd.getTotal();

        // //veggie
        // var chilli = $("#chilli")
        // var GreenPepper = $("#pepper")
        // var Jalapenos = $("#jala")
        // var Mushrooms = $("#mushroom")
        // var Olives = $("#olives")
        // var Onion = $("#onion")
        // var Pineapple = $("#apple")
        // var Sweetcorn = $("#sweetcorn")
        // var greens = new extraVeggieToppings(chilli, GreenPepper, Jalapenos, Mushrooms, Olives, Onion, Pineapple, Sweetcorn)
        // var veggieMega = greens.getTotal();

        // the total price
        var totalPrice = calcTotal()
        $('#total').text(totalPrice);
    });
});