<script>
    let height = 50;
</script>

<!-- Html -->

<ul>
    <li>
        <div>
            <input type="radio" id="option1" name="colour" value="black">
            <label for="option1">
                <span class="radio-custom"></span>
                <img src="/icons/black-circle.png" height={50}px alt="black-image">
            </label>
        </div>
    </li>
   
    <li>
        <div>
            <input type="radio" id="option2" name="colour" value="blue">
            <label for="option2">
            <span class="radio-custom"></span>
            <img src="/icons/blue-circle.png" height={50}px alt="blue-image">
        </label>
        </div>
    </li>
    <li>
        <div>
            <input type="radio" id="option3" name="colour" value="grey">
            <label for="option3">
            <span class="radio-custom"></span>
            <img src="/icons/grey-circle.png" height={50}px alt="grey-image">
        </label>
        </div>
    </li>
</ul>



<style>
    ul{
        /* background-color: bisque; */
        display: flex;
        padding: 0;
        
    }
    li{
        list-style-type: none;
        margin-right: 1em;
        
    }
    input[type=radio]{
        display: none;
    }
    img{
        border: 2px solid gray;
        border-radius: 100%;
        padding: 1px;
    }
    input[type=radio]:checked + label img {
    border: navy 2px solid; 
    background-color: #f0f0f0;
    }
    div:hover{
        padding: 3px;
        border: dashed black 1.5px;
        border-radius: 100%;
    }
</style>