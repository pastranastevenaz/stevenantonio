require 'test_helper'

class LessonsControllerTest < ActionDispatch::IntegrationTest
  test "should get programming" do
    get lessons_programming_url
    assert_response :success
  end

  test "should get html" do
    get lessons_html_url
    assert_response :success
  end

  test "should get linux" do
    get lessons_linux_url
    assert_response :success
  end

end
