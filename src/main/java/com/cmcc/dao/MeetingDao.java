package com.cmcc.dao;

import com.cmcc.pojo.MeetingPojo;
import org.springframework.stereotype.Component;

import java.util.List;

/**
 * Created by yj on 2020/8/7 13:18
 */
@Component
public interface MeetingDao {
    List<MeetingPojo> selectAll();

}
