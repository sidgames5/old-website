package;

import flixel.FlxG;
import flixel.FlxState;
import flixel.text.FlxText;

class PlayState extends FlxState
{
	var text:FlxText;
	var framesSinceLastColorChange:Float = 0;
	var frames:FlxText;

	override public function create()
	{
		super.create();

		text = new FlxText(0, 0, FlxG.width, "Hello World!");
		text.setFormat(null, 16, 0xffffff, "center");
		text.screenCenter(X);
		add(text);
	}

	override public function update(elapsed:Float)
	{
		super.update(elapsed);
		
		framesSinceLastColorChange++;

		// check if framesSinceLastColorChange is equal to 15
		if (framesSinceLastColorChange == 15)
		{
			// change the color of the text
			var colorR = Random.int(0, 255);
			var colorG = Random.int(0, 255);
			var colorB = Random.int(0, 255);
			text.color.red = colorR;
			text.color.green = colorG;
			text.color.blue = colorB;
			framesSinceLastColorChange = 0;
		}
	}
}
