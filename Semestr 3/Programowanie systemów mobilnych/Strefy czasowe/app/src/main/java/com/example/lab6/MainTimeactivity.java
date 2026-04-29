package com.example.lab6;

import android.os.Bundle;
import android.os.Handler;
import android.os.Looper;
import android.widget.TextView;

import androidx.appcompat.app.AppCompatActivity;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.TimeZone;

public class MainTimeactivity extends AppCompatActivity {

    private TextView currentTimeTextView;
    private TextView timeZone1TextView;
    private TextView timeZone2TextView;
    private TextView timeZone3TextView;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main_timeactivity);

        currentTimeTextView = findViewById(R.id.aktualnyCzas);
        timeZone1TextView = findViewById(R.id.time_zone_1);
        timeZone2TextView = findViewById(R.id.time_zone_2);
        timeZone3TextView = findViewById(R.id.time_zone_3);
        final Handler handler = new Handler(Looper.getMainLooper());
        handler.post(new Runnable() {
            @Override
            public void run() {
                updateTimes();
                handler.postDelayed(this, 1000);
            }
        });
    }

    private void updateTimes() {
        SimpleDateFormat sdf = new SimpleDateFormat("HH:mm:ss");
        String currentTime = sdf.format(new Date());
        currentTimeTextView.setText(currentTime);

        TimeZone timeZone1 = TimeZone.getTimeZone("America/New_York");
        TimeZone timeZone2 = TimeZone.getTimeZone("Europe/London");
        TimeZone timeZone3 = TimeZone.getTimeZone("Asia/Tokyo");

        sdf.setTimeZone(timeZone1);
        String time1 = sdf.format(new Date());
        timeZone1TextView.setText(time1);

        sdf.setTimeZone(timeZone2);
        String time2 = sdf.format(new Date());
        timeZone2TextView.setText(time2);

        sdf.setTimeZone(timeZone3);
        String time3 = sdf.format(new Date());
        timeZone3TextView.setText(time3);
    }
}
