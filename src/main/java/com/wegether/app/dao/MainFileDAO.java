package com.wegether.app.dao;

import com.wegether.app.domain.dto.MainFileDTO;
import com.wegether.app.domain.vo.DataFileVO;
import com.wegether.app.mapper.MainFileMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.List;


@Repository
@RequiredArgsConstructor
public class MainFileDAO {
    private final MainFileMapper mainFileMapper;


    //   file list
    public List<MainFileDTO> findPFFiles(Long projectId) {
        return mainFileMapper.MainPFSelectAll(projectId);
    };

    //    파일 조회
    public List<MainFileDTO> findByPId(Long projectId){return mainFileMapper.MainPFSelectAll(projectId);
    }
}
