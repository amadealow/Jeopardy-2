function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5tNSCiERalb":
        Script1();
        break;
      case "5WLeCRaH5Xz":
        Script2();
        break;
  }
}

function Script1()
{
  var player = GetPlayer();
player.SetVar('Results.ScorePoints', player.GetVar('current_score'));
}

function Script2()
{
  var player = GetPlayer();
var score = player.GetVar("ScorePercentage");
player.SetVar("ScorePercentage", Math.round(score));
}

