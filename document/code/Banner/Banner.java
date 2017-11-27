import java.awt.*;
import java.applet.*;

public class Banner extends Applet
{
	String msg;
	char ch;
	boolean stop;
	Thread t;

	public void init () {
		msg = "Maulana Abul Kalam Azad University of Technology. ";
		setFont(new Font("TimesRoman",Font.BOLD + Font.ITALIC, 20));
		setBackground(Color.cyan);
		setForeground(Color.red);
	}
	public void paint (Graphics g) {
		g.drawString(msg, 150, 150);
	}
}