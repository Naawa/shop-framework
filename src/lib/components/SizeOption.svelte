<script lang="ts">
    //size option


</script>

<style lang="scss">
    // got inspo from radio color picker on sliderrevoultion designed by The Bearded Wonder

    // radio button not showing, been trying to add a slider transtion between sizes
    input[type="radio"]{
        display: none;
        //when the radio is selected how it will look
        &:checked + label{
            span{
                transform: scale(1.25);
                background-color: black;
                color: white;
            }
        }
    }
    label{
        //how each size label will look like, may make them wider
        display: inline-block;
        width: 25px;
        height: 25px;
        margin-right: 10px;
        cursor: pointer;
        &:hover{
            span{
                transform: scale(1.25);
                background-color: black;
                color: white;
            }
        }
    }
    //the text part held within the span
    span{
        display: block;
        text-align: center;
        font-weight: 500;
        width: 100%;
        height: 100%;
        border: 1px solid lightgrey;
        transition: transform .2s ease-in-out;
    }    
</style>

<div>
    <input type="radio" name="size" id="L" value="L">
    <label for="L"><span class="L">L</span></label>

    <input type="radio" name="size" id="M" value="M">
    <label for="M"><span class="M">M</span></label>

    <input type="radio" name="size" id="S" value="S">
    <label for="S"><span class="S">S</span></label>
</div>