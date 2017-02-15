import java.util.ArrayList;
import java.util.List;

/**
 * Created by ethan on 2017-02-07.
 */
public class Student extends Person {
    String major;
    boolean fulltime;
    private List<Course> courses = new ArrayList<Course>();

    public Student(String name, String emailAddress, String major, boolean fulltime) {
        super(name, emailAddress);
        this.major = major;
        this.fulltime = fulltime;
    }

    public Student(String bob, String s, String s1) {
        super();
    }

    public String toString() {
        return String.format("Name: %s\nMajor: %s\nEmail: %s", this.name, this.major, this.emailAddress);
    }

    public void addCourse(Course c){
        this.courses.add(c);
    }
}
