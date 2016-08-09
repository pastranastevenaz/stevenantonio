require 'test_helper'

class LessonsControllerTest < ActionDispatch::IntegrationTest
  test "should get home" do
    get lessons_home_url
    assert_response :success
  end

  test "should get html_css" do
    get lessons_html_css_url
    assert_response :success
  end

  test "should get javascript" do
    get lessons_javascript_url
    assert_response :success
  end

  test "should get ruby_rails" do
    get lessons_ruby_rails_url
    assert_response :success
  end

end
