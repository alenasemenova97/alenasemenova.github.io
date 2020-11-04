function flashOn()
{
    event.currentTarget.classList.add("flashed");
}

function flashOff()
{
    event.currentTarget.classList.remove("flashed");
}

function select()
{
    elem = event.currentTarget;
    if (!elem.classList.contains("select"))
    {
        elem.classList.add("select");
    }
    else
    {
        elem.classList.remove("select");
    }
}