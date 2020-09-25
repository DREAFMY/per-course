package com.thoughtworks.rslist.exception;

public class GoodsHandleException extends RuntimeException{
    private String errorMessage;

    public GoodsHandleException(String errorMessage) {
        this.errorMessage = errorMessage;
    }

    @Override
    public String getMessage() {
        return errorMessage;
    }
}
