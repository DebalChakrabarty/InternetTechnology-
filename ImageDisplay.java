import java.applet.*;
import java.awt.*;
class ImageDisplay extends Applet
{
	Image picture;
	public void init()
	{
		picture = getImage(getDocumentBase(),"index.jpg");
	}
	public void paint(Graphics g)
	{
		g.drawImage(picture,30,30,this);
	}
}

