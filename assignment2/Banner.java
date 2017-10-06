import java.applet.*;
import java.awt.*;
public class Banner extends Applet
{
	Image picture;
	public void init()
	{
		picture = getImage(getDocumentBase(),"repo/InternetTechnology-/index.jpg");
	}
	public void paint(Graphics g)
	{
		g.drawImage(picture,30,30,this);
	}
}

