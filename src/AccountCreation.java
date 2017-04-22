import javax.swing.*;
import java.awt.*;
import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.net.MalformedURLException;
import java.net.URL;
import java.net.URLConnection;
import java.util.Date;
import com.google.gson.*;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
public class AccountCreation extends JPanel implements Callback {

    private CreateBox Box;
    private getMessage message;
    private String Name;

interface Callback{
    void updateName(String newName);

    public StatusSearch(JFrame root) {
        super();
        this.searchBox = new SearchBox(this::updateName);
        this.statusFeed = new StatusFeed(root);
        this.setLayout(new GridLayout(0, 1));
        this.root = root;
        this.setText(defaultText);
    }

    public void setName(String newName) {
        this.Name = newName;
        this.message.updateMsg(this.Name);
    }
    public String callAPI(String name){
        try {
            Gson gson = new GsonBuilder().create();
            String fromAPI = "";
            URL myURL = new URL("http://localhost:8080/profileDisplay/getUserPosts?userName=" + name);
            URLConnection api = myURL.openConnection();
            api.connect();
            BufferedReader in = new BufferedReader(new InputStreamReader(api.getInputStream()));
            String inputLine;


            while ((inputLine = in.readLine()) != null){
                StatusJSON[] statusArray = gson.fromJson(inputLine, StatusJSON[].class);
                for(StatusJSON sj : statusArray){
                    fromAPI += String.format("%s - %s\n%s\n\n", name, sj.dateCreated, sj.statusText);
                }
            }
            in.close();
            return fromAPI;
        }

